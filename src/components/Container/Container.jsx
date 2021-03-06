import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Container: {
    maxWidth: '1700px',
    margin: '0 auto',
    padding: '0 15px',
    '& h1': {
      display: 'block',
      marginBottom: '15px',
    },
  },
});

const Container = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.Container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
