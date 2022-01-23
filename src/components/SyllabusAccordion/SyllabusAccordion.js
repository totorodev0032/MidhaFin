import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from '@emotion/styled';
import logo from '../../images/midha.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: '1px solid #6a1b1a',
    borderRadius: '5px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '53.33%',
    flexShrink: 0,
    color: 'maroon',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  summaryContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function SyllabusAccordions({ curriculum }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {curriculum.map((data, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            className={classes.hideborder}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                WEEK {index + 1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.summaryContainer}>
              {data.map((point, index) => (
                <Typography>
                  {index > 0 && <ListItem>{point}</ListItem>}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 20px auto;
  justify-content: start;
  align-items: center;

  ::before {
    content: '▶';
    font-size: 8px;
    color: maroon;
  }
`;
