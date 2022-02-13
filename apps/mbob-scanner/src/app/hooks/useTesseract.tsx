import { NotificationTypeEnum, showNotification } from '@react-quick-hacks/shared';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import worker, { loadWorker } from '../plugins/tesseract-plugin';

export interface TesseractOptions {
  readImageText: (image: File) => Promise<string | undefined>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseTesseractProps {
  areOperationsPending: Dispatch<SetStateAction<boolean>>;
}

export const useTesseract = ({areOperationsPending}: UseTesseractProps): TesseractOptions => {
  const isTesseractReady = useRef<boolean>(false);
  useEffect(() => {
    areOperationsPending(true);
    if (isTesseractReady.current) {
      return;
    }
    loadWorker().then(() => {
      isTesseractReady.current = false;
      areOperationsPending(false);
    });
  }, []);
  const readImageText = async (image: File): Promise<string | undefined> => {
    try {
      const { data: { text } } = await worker.recognize(image);
      return text;
    } catch (error) {
      showNotification(error.message, NotificationTypeEnum.Error);
      return undefined;
    }
  };

  useEffect(() => () => {
    worker.terminate().then((result) => console.log('terminated', result));
  }, []);

  return {
    readImageText
  };
};

export default useTesseract;
