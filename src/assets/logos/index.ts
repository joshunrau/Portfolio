import bootstrapLogo from '@/assets/logos/frameworks/bootstrap.svg';
import flaskLogo from '@/assets/logos/frameworks/flask.svg';
import matplotlibLogo from '@/assets/logos/frameworks/matplotlib.svg';
import nodeLogo from '@/assets/logos/frameworks/node.svg';
import numpyLogo from '@/assets/logos/frameworks/numpy.svg';
import pandasLogo from '@/assets/logos/frameworks/pandas.svg';
import reactLogo from '@/assets/logos/frameworks/react.svg';
import sklearnLogo from '@/assets/logos/frameworks/sklearn.svg';
import cssLogo from '@/assets/logos/languages/css.svg';
import htmlLogo from '@/assets/logos/languages/html.svg';
import javascriptLogo from '@/assets/logos/languages/javascript.svg';
import pythonLogo from '@/assets/logos/languages/python.svg';
import rlangLogo from '@/assets/logos/languages/rlang.svg';
import sassLogo from '@/assets/logos/languages/sass.svg';
import typescriptLogo from '@/assets/logos/languages/typescript.svg';
import gitLogo from '@/assets/logos/tools/git.svg';
import webpackLogo from '@/assets/logos/tools/webpack.svg';
import Logo from '@/utils/Logo';

const languages = [
  new Logo('CSS', cssLogo),
  new Logo('HTML', htmlLogo),
  new Logo('JavaScript', javascriptLogo),
  new Logo('Python', pythonLogo),
  new Logo('R', rlangLogo),
  new Logo('SASS', sassLogo),
  new Logo('TypeScript', typescriptLogo)
];

const frameworks = [
  new Logo('Bootstrap', bootstrapLogo),
  new Logo('Flask', flaskLogo),
  new Logo('Matplotlib', matplotlibLogo),
  new Logo('Node', nodeLogo),
  new Logo('NumPy', numpyLogo),
  new Logo('Pandas', pandasLogo),
  new Logo('React', reactLogo),
  new Logo('Scikit-Learn', sklearnLogo)
];

const tools = [
  new Logo('Git', gitLogo),
  new Logo('Webpack', webpackLogo)
];

export default [...frameworks, ...languages, ...tools];
