import React from 'react';
import Contact from '../contact';
import Donate from '../donate';
import Milestone from '../milestone';
import News from '../news';
import Partner from '../partner';
import AddNews from '../addNews';
import EditNews from '../editNews';
import AddPartners from '../editPartners';
import EditPartners from '../editPartners';
import AddMilestone from '../addMilestones';
import EditMilestone from '../editMilestones';

const Routes = [
  {
    path: '/contact',
    exact: true,
    main: () => <Contact />,
  },
  {
    path: '/donate',
    exact: true,
    main: () => <Donate />,
  },
  {
    path: '/milestone',
    exact: true,
    main: () => <Milestone />,
  },
  {
    path: '/news',
    exact: true,
    main: () => <News />,
  },

  {
    path: '/partner',
    exact: true,
    main: () => <Partner />,
  },

  {
    path: '/addnew',
    exact: true,
    main: () => <AddNews />,
  },

  {
    path: '/editnew/:id',
    exact: true,
    main: () => <EditNews />,
  },

  {
    path: '/addpartner',
    exact: true,
    main: () => <AddPartners />,
  },

  {
    path: '/editpartner',
    exact: true,
    main: () => <EditPartners />,
  },

  {
    path: '/addmilestone',
    exact: true,
    main: () => <AddMilestone />,
  },

  {
    path: '/editmilestone',
    exact: true,
    main: () => <EditMilestone />,
  },
];

export default Routes;
