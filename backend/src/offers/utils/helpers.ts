import { v4 as uuidv4 } from 'uuid';

export const generateCustomUrl = (artistName: string, offerName: string): string => {
  const uniqueId = uuidv4();
  return `${artistName}/${offerName}-${uniqueId}`;
}