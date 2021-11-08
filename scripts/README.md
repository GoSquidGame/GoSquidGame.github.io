
**L2 deposit and withdraw test**

* L1: ethereum goerli
* L2: matic mumbai

```
cd ../

// check the balance in L1
hh --network goerli run scripts/LeedoBalance.js

// claim 2 cards
hh --network goerli run scripts/LeedoClaims.js

// stake 2 cards
hh --network goerli run scripts/LeedoVaultStaking.js

// approve and depositFor to deposit to matic L2
hh --network goerli run scripts/LeedoDepositToL2.js

// check the balance in L2   (it takes 7 to 15 mins)
hh --network mumbai run scripts/MaticBalance.js

// burn to withdraw to ethereum L1
hh --network mumbai run scripts/MaticWithdrawBurn.js

// exit to withdraw to ethereum L1
hh --network goerli run scripts/LeedoWithdrawExit.js
```
