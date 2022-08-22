import * as Yup from 'yup';

export const CreateServerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  mem: Yup.string().required('Memory is required'),
  state: Yup.string().required('State is required'),
  cpu: Yup.string().required('CPU is required'),
});
