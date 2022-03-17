module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'sansaja':['PT Sans'],
        'sansita':['Sansita Swashed']
      },
      spacing: {
        '':'',
        '144': '45rem',
      },
      keyframes:{
        memutar:{
          '0%':{
            transform:'translate(0px,0px)'
          },
          '20%':{
            transform:'translate(0px,-140px) scale(2)'
          },
          '40%':{
            transform:'translate(340px,-140px) scale(3)'
          },
          '60%':{
            transform:'translate(340px,140px) scale(4)'
          },
          '80%':{
            transform:'translate(0px,140px) scale(5)'
          },
          '100%':{
            transform:'translate(0px,0px) scale(0)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },

        bigbounce:{
          '0%,100%':{
            transform:'translateY(50%)'
          },
          '50%':{
            transform:'translateY(-50%)'
          }
        },

        dansa:{
          '0%':{
            transform:'translate(0px,0px) scale(1)'
          },
          '33%':{
            transform:'translate(30px,-50px) scale(1.2)'
          },
          '66%':{
            transform:'translate(-20px,20px) scale(0.8)'
          },
          '100%':{
            transform:'translate(0px,0px) scale(1)'
          }
        }
      },
      animation:{
        memutar:'memutar 5s infinite',
        bigbounce:'bigbounce 1s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        dansa:'dansa 5s infinite'
      }
    },
  },
  plugins: [],
}
