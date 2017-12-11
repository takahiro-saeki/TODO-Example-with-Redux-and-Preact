import uuid from 'uuid';
const defaultData = [
  {
    text: 'Use Preact with Redux',
    completed: false,
    id: uuid.v4()
  },
  {
    text: 'Sample text',
    completed: false,
    id: uuid.v4()
  },
  {
    text: 'Show me what you got!',
    completed: false,
    id: uuid.v4()
  }
]

export default defaultData;