import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { RiUserStarFill } from 'react-icons/ri';

const useStyles = makeStyles({
  list: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullList: {
    width: 'auto',
  },
});

export default function Drawerright() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   flexDirection: 'column',
        // }}
      >
        <IoIcons.IoMdCloseCircle
          style={{
            fontSize: '30px',
            color: 'purple',
            marginTop: '15px',
            marginLeft: '5px',
          }}
        />
        <List>
          <ListItem>
            <ListItemIcon>
              <BiIcons.BiBookReader style={{ fontSize: '25px' }} />
            </ListItemIcon>
            <a
              href="/#courseID"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <ListItemText primary="Programs" />
            </a>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AiIcons.AiOutlineContacts style={{ fontSize: '25px' }} />
            </ListItemIcon>
            <a
              href="#contact"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <ListItemText primary="Contact Us" />
            </a>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <FaIcons.FaBook style={{ fontSize: '25px' }} />
            </ListItemIcon>
            <Link
              to="/blogs"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <ListItemText primary="Blogs" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AiIcons.AiOutlineStar style={{ fontSize: '25px' }} />
            </ListItemIcon>
            <Link
              to="/results"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <ListItemText primary="Results" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RiUserStarFill style={{ fontSize: '25px' }} />
            </ListItemIcon>
            <Link
              to="/testimonials"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <ListItemText primary="Testimonials" />
            </Link>
          </ListItem>
        </List>
        {/* <Buttoncomps value="Sigsnup" onClick={toggleDrawer(anchor, false)} /> */}
      </div>
    </>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {' '}
            <CgIcons.CgMenuLeftAlt style={{ fontSize: '30px' }} />{' '}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
