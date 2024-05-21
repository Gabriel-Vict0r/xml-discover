interface ITitle {
  title: string;
}
const Title = ({ title }: ITitle) => {
  return <h1 className="text-6xl font-bold">{title}</h1>;
};
export default Title;
