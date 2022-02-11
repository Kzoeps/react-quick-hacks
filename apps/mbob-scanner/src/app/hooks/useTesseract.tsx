import { createWorker, Worker } from 'tesseract.js';
import { NotificationTypeEnum, showNotification } from '@react-quick-hacks/shared';
import { useCallback, useEffect, useState } from 'react';

export interface TesseractOptions {
  readImageText: (image: File) => Promise<string | undefined>;
  loadWorker: () => Promise<void>;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseTesseractProps{

}
export const useTesseract = (props: UseTesseractProps): TesseractOptions => {
  const [isTesseractReady, setIsTesseractReady] = useState(false);
  const worker: Worker = createWorker({
    logger: m => console.log(m)
  });
  const loadWorker = useCallback(async (): Promise<void> => {
    try {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      setIsTesseractReady(true);
    } catch (error) {
      showNotification(error.message, NotificationTypeEnum.Error);
    }
  }, [])

  const readImageText = async (image: File): Promise<string | undefined> => {
    try {
      if (isTesseractReady) {
        const { data: { text } } = await worker.recognize(image);
        return text;
      }
      return 'tesseract was not ready';
    } catch (error) {
      showNotification(error.message, NotificationTypeEnum.Error);
      return undefined;
    }
  }
  useEffect(() => () => {
    worker.terminate().then((result) => console.log('terminated', result));
  }, [])

  return {
    readImageText,
    loadWorker
  };
}

export default useTesseract;
