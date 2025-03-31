**LifeAgent**  
This AI-driven agent enables secure authentication via Internet Computer Protocol (ICP) identity, allowing users to seamlessly onboard, upload, and manage medical records. The AI analyzes data to generate personalized treatment plans, ensuring informed decision-making. All records are securely stored and shared on the blockchain, with real-time metrics and dashboards providing valuable insights.  

**Core Capabilities:**  
- **AI-Driven Analysis:** Generates personalized treatment recommendations.  
- **Decentralized Storage:** Ensures secure and immutable medical records.  
- **ICP Authentication:** Provides seamless and private user onboarding.  
- **Data Sharing:** Enables encrypted access control for healthcare providers.  
- **Dashboards & Metrics:** Offers real-time insights into medical records.  




### Prerequisites

requirements: Please install these versions or high

- **dfx**: You have installed the latest version of the DFINITY Canister SDK, `dfx`. You can download it from the DFINITY SDK page. [installation guide](https://demergent-labs.github.io/azle/get_started.html#installation)

 ```
  use version dfx 0.22.0
 ```
- **Node.js**: You have installed Node.js, version 18 or above.
```
 v20.12.2

```
- Azle version use 
 ```
  azle 0.24.1
 ```

 - podman verion use

 ```
  podman version 3.4.4
  
 ```
Please ensure all these prerequisites are met before proceeding with the setup of the project.

# Running the project locally

If you want to test your project locally, you can use the following commands:

Cloning repo:

```bash
git clone https://github.com/ndacyaAlice/LifeAgent.git
cd LifeAgent
```


### to install and deploy Step by Step Follow below commands:

```bash

# Installing Dependencies
npm i

# Starts the replica, running in the background
dfx start --host 127.0.0.1:8000 --clean --background

# Deploys
dfx deploy
or

AZLE_AUTORELOAD=true dfx deploy
```

your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.
` http://{canisterId}.localhost:8000/`






import {
    $query,
    $update,
    Record,
    StableBTreeMap,
    Vec,
    nat64,
    text,
    Opt,
    ic,
    Result,
    Err,
    Ok
} from 'azle';

// Define a Photo record type
type Photo = Record<{
    id: string;
    name: text;
    description: text;
    base64Data: text;
    mimeType: text;
    size: nat64;
    createdAt: nat64;
}>;

// Error type
type PhotoError = Record<{
    message: text;
}>;

// Storage for photos
const photoStorage = new StableBTreeMap<string, Photo>(0, 44, 1024);

$update;
export function uploadPhoto(
    name: text,
    description: text,
    base64Data: text
): Result<Photo, PhotoError> {
    // Validate inputs
    if (!name || name.length === 0) {
        return Err({ message: 'Name cannot be empty' });
    }

    if (!base64Data.startsWith('data:image/')) {
        return Err({ message: 'Invalid image format. Expected base64 encoded image data.' });
    }

    // Extract MIME type from base64 data
    const mimeTypeMatch = base64Data.match(/^data:(image\/\w+);base64,/);
    if (!mimeTypeMatch) {
        return Err({ message: 'Invalid base64 image format' });
    }

    const mimeType = mimeTypeMatch[1];
    const pureBase64 = base64Data.split(',')[1];
    const size = BigInt(Math.floor(pureBase64.length * 0.75)); // Approximate size in bytes

    // Create photo record
    const photo: Photo = {
        id: generateId(),
        name,
        description,
        base64Data,
        mimeType,
        size,
        createdAt: ic.time()
    };

    // Store the photo
    photoStorage.insert(photo.id, photo);
    return Ok(photo);
}

// Helper function to generate unique ID
function generateId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

$query;
export function getPhoto(id: string): Result<Opt<Photo>, PhotoError> {
    if (!id) {
        return Err({ message: 'ID cannot be empty' });
    }
    return Ok(photoStorage.get(id));
}

$query;
export function getAllPhotos(): Vec<Photo> {
    return photoStorage.values();
}

$update;
export function deletePhoto(id: string): Result<boolean, PhotoError> {
    if (!photoStorage.containsKey(id)) {
        return Err({ message: 'Photo not found' });
    }

    photoStorage.remove(id);
    return Ok(true);
}

