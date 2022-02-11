import { createWorker } from 'tesseract.js';
import { NotificationTypeEnum, showNotification } from '@react-quick-hacks/shared';
import { useEffect } from 'react';

export interface TesseractOptions {
  readImageText: (image: File) => Promise<string | undefined>;
  loadWorker: () => Promise<void>;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseTesseractProps{

}
export const useTesseract = (props: UseTesseractProps): TesseractOptions => {
  const worker = createWorker({
    logger: m => console.log(m),
  });

  const loadWorker = async (): Promise<void> => {
    try {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
    } catch (error) {
      showNotification(error.message, NotificationTypeEnum.error);
    }
  }

  const readImageText = async (image: File): Promise<string | undefined> => {
    try {
      const { data: { text } } = await worker.recognize(image);
      return text;
    } catch (error) {
      showNotification(error.message, NotificationTypeEnum.Error);
      return undefined;
    }
  }
  useEffect(() => () => {
    // eslint-disable-next-line no-void
    void worker.terminate();
  }, [worker])

  return {
    readImageText,
    loadWorker
  };
}

export default useTesseract;
