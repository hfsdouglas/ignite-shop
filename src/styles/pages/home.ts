import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  width: '100%',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 8,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
})
