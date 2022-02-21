import { NotificationTypeEnum, showNotification } from '@react-quick-hacks/shared';
import { Dispatch, useEffect, useRef } from 'react';
import worker, { loadWorker } from '../plugins/tesseract-plugin';

export interface TesseractOptions {
  readImageText: (image: File) => Promise<string | undefined>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseTesseractProps {
  dispatch: Dispatch<{ type: 'update-tesseract',payload: boolean}>
}

const useTesseract = ({dispatch}: UseTesseractProps): TesseractOptions => {
  const isTesseractReady = useRef<boolean>(false);
  useEffect(() => {
    dispatch({ type: 'update-tesseract', payload: true });
    if (isTesseractReady.current) {
      return;
    }
    loadWorker().then(() => {
      isTesseractReady.current = false;
      dispatch({ type: 'update-tesseract', payload: false });
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
    // worker.terminate().then((result) => console.log('terminated', result));
  }, []);

  return {
    readImageText
  };
};

export default useTesseract;
