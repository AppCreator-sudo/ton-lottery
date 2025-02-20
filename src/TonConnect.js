import { TonConnect } from '@tonconnect/sdk';

// Создаем экземпляр TON Connect клиента
const tonConnect = new TonConnect({
  manifestUrl: 'https://your-manifest-url.com/manifest.json',  // Укажи свой manifest
});

export const connectTON = async () => {
  try {
    const session = await tonConnect.connect();  // Запуск подключения
    console.log('Connected to TON wallet', session);
    return session;
  } catch (error) {
    console.error('Error connecting to TON wallet', error);
  }
};

export const sendTransaction = async (amount, recipient) => {
  try {
    const session = await tonConnect.getSession();
    if (session) {
      const transaction = await tonConnect.sendTransaction({
        amount: amount,  // Сумма в TON
        recipient: recipient,  // Получатель
      });
      console.log('Transaction successful', transaction);
    }
  } catch (error) {
    console.error('Transaction failed', error);
  }
};
