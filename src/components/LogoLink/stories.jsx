import { LogoLink } from ".";

export default {
  title: "LogoLink",
  component: LogoLink,
  args: {
    text: "LogoLink",
    srcImg: "assets/images/logo.svg",
    link: "http://localhost:6006/"
  },
  argTypes: {
    children: { type: "string" }
  }
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args}></LogoLink>
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args}></LogoLink>
    </div>
  );
};

TextOnly.args = {
  srcImg: ""
};
