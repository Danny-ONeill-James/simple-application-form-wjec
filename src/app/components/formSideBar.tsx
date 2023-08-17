interface FormSidebarProps {
  title: string;
  paragraph: string;
}

const FormSideBar = (props: FormSidebarProps) => {
  return (
    <div className="text-gray-600">
      <p className="font-medium text-lg">{props.title}</p>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default FormSideBar;
