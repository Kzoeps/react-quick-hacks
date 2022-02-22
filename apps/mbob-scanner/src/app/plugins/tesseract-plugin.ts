import { createWorker, Worker } from 'tesseract.js';
import { NotificationTypeEnum, showNotification } from '@react-quick-hacks/shared';

const worker: Worker = createWorker({
  logger: m => console.log(m),
});

export const loadWorker = async (): Promise<void> => {
  try {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
  } catch (error) {
    showNotification(error.message, NotificationTypeEnum.Error);
  }
};

export default worker;
