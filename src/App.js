import React, { useState } from 'react';
import { connectTON, sendTransaction } from './TonConnect';

const App = () => {
  const [session, setSession] = useState(null);

  const handleConnect = async () => {
    const sessionData = await connectTON();
    setSession(sessionData);
  };

  const handleBuyTicket = async () => {
    const recipient = 'TON_WALLET_ADDRESS'; // Адрес, на который отправляются деньги
    const amount = 0.2; // Стоимость билета в TON

    try {
      await sendTransaction(amount, recipient);
      alert('Ticket purchased successfully!');
    } catch (error) {
      console.error('Error purchasing ticket', error);
      alert('Error purchasing ticket');
    }
  };

  return (
    <div>
      <h1>Welcome to the Lottery</h1>
      {session ? (
        <p>Connected to {session.walletName}</p>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
      {session && <button onClick={handleBuyTicket}>Buy Ticket</button>}
    </div>
  );
};

export default App;
