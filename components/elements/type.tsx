import Image from "next/image";

type Props = {
  name: string;
  icon: string;
  background: string;
};

const Type = ({ name, icon, background }: Props) => {
  return (
    <section
      style={{ background }}
      className="flex flex-none items-center rounded-primary py-0.5 pl-1 pr-2.5">
      <Image
        src={icon}
        alt={name}
        width={24}
        height={24}
        className="object-contain"
      />
      <p className="text-center text-xs capitalize text-white">{name}</p>
    </section>
  );
};

export default Type;
