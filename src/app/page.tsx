import Image from "next/image";
import PropTest from "./component/propTest";
export default function Home() {
  return (
    <>
   
    <PropTest  name="Dua" age={19}  contact={675268697}/>
    <PropTest  name="Ali" age={14} contact={675268697} />
    <PropTest  name="Haider" age={12} contact={675268697} />
    <PropTest  name="Shiza" age={8} contact={675268697} />
     </>
  );
}
