export default function (start: string,end?: string ){
  const formattedStart = `${start.slice(0,2)}:${start.slice(2)}`;
  const formattedEnd = end ? `- ${start.slice(0,2)}:${start.slice(2)}`: '';
  return formattedStart + formattedEnd;
}