import path from 'path';

const alias = {
  src: path.resolve(process.cwd(), 'src')
};

export default {
  alias,
  root: process.cwd()
};