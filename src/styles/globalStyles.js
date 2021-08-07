/* DOCUMENTATION

  SPACING CLASSES
  --------------------------------------------

  *** FIRST LETTER - margin OR padding ***
  - m (margin)
  - p (padding)

  *** SECOND LETTER - position (optional) ***
  - x (x-values, left/right)
  - y (y-values, top/bottom)
  - t (top)
  - b (bottom)
  - r (right)
  - l (left)

  *** NUMBER - magnitude ***
  - 1 SPACING VALUE = 8px

  *** EXAMPLE CLASSES ***:
    M_1 = margin: 8px;
    MR_2 = marginRight: 16px;
    PY_5 = padding: 40px 0;

  * IF HIGHER MAGNITUDES ARE NEEDED, MUST ADD WHOLE SET OF CLASSES*

*/
const styles = (theme) => ({
  /* MARGIN CLASSES */
  m_1: {
    margin: theme.spacing(1),
  },
  mx_1: {
    margin: theme.spacing(0, 1),
  },
  my_1: {
    margin: theme.spacing(1, 0),
  },
  mt_1: {
    marginTop: theme.spacing(1),
  },
  mb_1: {
    marginBottom: theme.spacing(1),
  },
  mr_1: {
    marginRight: theme.spacing(1),
  },
  ml_1: {
    marginLeft: theme.spacing(1),
  },
  m_2: {
    margin: theme.spacing(2),
  },
  mx_2: {
    margin: theme.spacing(0, 2),
  },
  my_2: {
    margin: theme.spacing(2, 0),
  },
  mt_2: {
    marginTop: theme.spacing(2),
  },
  mb_2: {
    marginBottom: theme.spacing(2),
  },
  mr_2: {
    marginRight: theme.spacing(2),
  },
  ml_2: {
    marginLeft: theme.spacing(2),
  },
  m_3: {
    margin: theme.spacing(3),
  },
  mx_3: {
    margin: theme.spacing(0, 3),
  },
  my_3: {
    margin: theme.spacing(3, 0),
  },
  mt_3: {
    marginTop: theme.spacing(3),
  },
  mb_3: {
    marginBottom: theme.spacing(3),
  },
  mr_3: {
    marginRight: theme.spacing(3),
  },
  ml_3: {
    marginLeft: theme.spacing(3),
  },
  m_4: {
    margin: theme.spacing(4),
  },
  mx_4: {
    margin: theme.spacing(0, 4),
  },
  my_4: {
    margin: theme.spacing(4, 0),
  },
  mt_4: {
    marginTop: theme.spacing(4),
  },
  mb_4: {
    marginBottom: theme.spacing(4),
  },
  mr_4: {
    marginRight: theme.spacing(4),
  },
  ml_4: {
    marginLeft: theme.spacing(4),
  },
  m_5: {
    margin: theme.spacing(5),
  },
  mx_5: {
    margin: theme.spacing(0, 5),
  },
  my_5: {
    margin: theme.spacing(5, 0),
  },
  mt_5: {
    marginTop: theme.spacing(5),
  },
  mb_5: {
    marginBottom: theme.spacing(5),
  },
  mr_5: {
    marginRight: theme.spacing(5),
  },
  ml_5: {
    marginLeft: theme.spacing(5),
  },
  m_6: {
    margin: theme.spacing(6),
  },
  mx_6: {
    margin: theme.spacing(0, 6),
  },
  my_6: {
    margin: theme.spacing(6, 0),
  },
  mt_6: {
    marginTop: theme.spacing(6),
  },
  mb_6: {
    marginBottom: theme.spacing(6),
  },
  mr_6: {
    marginRight: theme.spacing(6),
  },
  ml_6: {
    marginLeft: theme.spacing(6),
  },
  m_7: {
    margin: theme.spacing(7),
  },
  mx_7: {
    margin: theme.spacing(0, 7),
  },
  my_7: {
    margin: theme.spacing(7, 0),
  },
  mt_7: {
    marginTop: theme.spacing(7),
  },
  mb_7: {
    marginBottom: theme.spacing(7),
  },
  mr_7: {
    marginRight: theme.spacing(7),
  },
  ml_7: {
    marginLeft: theme.spacing(7),
  },
  /*PADDING CLASSES*/
  p_1: {
    padding: theme.spacing(1),
  },
  px_1: {
    padding: theme.spacing(0, 1),
  },
  py_1: {
    padding: theme.spacing(1, 0),
  },
  pt_1: {
    paddingTop: theme.spacing(1),
  },
  pb_1: {
    paddingBottom: theme.spacing(1),
  },
  pr_1: {
    paddingRight: theme.spacing(1),
  },
  pl_1: {
    paddingLeft: theme.spacing(1),
  },
  p_2: {
    padding: theme.spacing(2),
  },
  px_2: {
    padding: theme.spacing(0, 2),
  },
  py_2: {
    padding: theme.spacing(2, 0),
  },
  pt_2: {
    paddingTop: theme.spacing(2),
  },
  pb_2: {
    paddingBottom: theme.spacing(2),
  },
  pr_2: {
    paddingRight: theme.spacing(2),
  },
  pl_2: {
    paddingLeft: theme.spacing(2),
  },
  p_3: {
    padding: theme.spacing(3),
  },
  px_3: {
    padding: theme.spacing(0, 3),
  },
  py_3: {
    padding: theme.spacing(3, 0),
  },
  pt_3: {
    paddingTop: theme.spacing(3),
  },
  pb_3: {
    paddingBottom: theme.spacing(3),
  },
  pr_3: {
    paddingRight: theme.spacing(3),
  },
  pl_3: {
    paddingLeft: theme.spacing(3),
  },
  p_4: {
    padding: theme.spacing(4),
  },
  px_4: {
    padding: theme.spacing(0, 4),
  },
  py_4: {
    padding: theme.spacing(4, 0),
  },
  pt_4: {
    paddingTop: theme.spacing(4),
  },
  pt_4: {
    paddingBottom: theme.spacing(4),
  },
  pr_4: {
    paddingRight: theme.spacing(4),
  },
  pl_4: {
    paddingLeft: theme.spacing(4),
  },
  p_5: {
    padding: theme.spacing(5),
  },
  px_5: {
    padding: theme.spacing(0, 5),
  },
  py_5: {
    padding: theme.spacing(5, 0),
  },
  pt_5: {
    paddingTop: theme.spacing(5),
  },
  pb_5: {
    paddingBottom: theme.spacing(5),
  },
  pr_5: {
    paddingRight: theme.spacing(5),
  },
  pl_5: {
    paddingLeft: theme.spacing(5),
  },
  p_6: {
    padding: theme.spacing(6),
  },
  px_6: {
    padding: theme.spacing(0, 6),
  },
  py_6: {
    padding: theme.spacing(6, 0),
  },
  pt_6: {
    paddingTop: theme.spacing(6),
  },
  pb_6: {
    paddingBottom: theme.spacing(6),
  },
  pr_6: {
    paddingRight: theme.spacing(6),
  },
  pl_6: {
    paddingLeft: theme.spacing(6),
  },
  p_7: {
    padding: theme.spacing(7),
  },
  px_7: {
    padding: theme.spacing(0, 7),
  },
  py_7: {
    padding: theme.spacing(7, 0),
  },
  pt_7: {
    paddingTop: theme.spacing(7),
  },
  pb_7: {
    paddingBottom: theme.spacing(7),
  },
  pr_7: {
    paddingRight: theme.spacing(7),
  },
  pl_7: {
    paddingLeft: theme.spacing(7),
  }

});

export default styles;
