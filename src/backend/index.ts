import { Canister, query, text } from 'azle/experimental';

export default Canister({
    getString: query([], text, () => {
        return 'This is a query method!';
    })
});

      