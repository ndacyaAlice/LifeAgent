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
git clone https://github.com/Rherve250/GovTransChain.git
cd GovTransChain
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