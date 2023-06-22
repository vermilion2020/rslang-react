import { Title } from "../title/Title";

interface ContentProps {
  children: React.ReactNode,
  title: string,
  classN?: string
}


export function ContentContainer({ children, title }: ContentProps) {
  return (
    <section className="section-word unit-1 learn-base">
      <div className="wrapper-sec-word">
        <Title titleName={title}/>
        { children }
      </div>
    </section>
  );
}