import { Info } from '../../types';

interface IProps {
  infos: Info[];
}

function InfoCard({ infos }: IProps) {
  return (
    <ul className="flex h-auto w-full flex-col gap-y-2 rounded-md px-4 py-2 shadow-md">
      {infos.map((info) => (
        <li className="ml-4 list-disc font-semibold italic" key={info.id}>
          {info.info}
        </li>
      ))}
    </ul>
  );
}
export default InfoCard;
