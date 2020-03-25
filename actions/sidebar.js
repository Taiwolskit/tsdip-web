export const SIDEBAR_CLICK = 'SIDEBAR_CLICK';

export const sidebarClick = (event, itemActive) => {
  // event.preventDefault();
  // console.log('1---------');

  return {
    type: SIDEBAR_CLICK,
    itemActive
  };
};
