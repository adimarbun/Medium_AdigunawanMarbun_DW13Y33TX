import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { width } from '@material-ui/system';
import { Typography,Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin:"30px 10px 30px 10px",
    
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function GridOneHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs >
<<<<<<< HEAD
            <div><Link href="articelDetail">
=======
            <Link href="articelDetail">
>>>>>>> 5c3fdce0d51e2d7d2fe16d1b91c76617ec08d0d3
              <div>
                <img 
                  src="https://miro.medium.com/max/2500/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg"
                  width="100%"
                  height="200px"
                  
                  />
              </div>
              <div style={{marginLeft:"60px"}}>
                  <h3>If You Only Read A Few Books In 2018, Read These</h3>
                  <p>If you’d liked to be jerked around less, provoked less, and more productive and inwardly focused, where should you start?</p>
              </div>
<<<<<<< HEAD
              </Link>
            </div>
=======
            </Link>
>>>>>>> 5c3fdce0d51e2d7d2fe16d1b91c76617ec08d0d3
          </Grid>
          <Grid item xs>
            <div >
              <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                  <img 
                      src="https://miro.medium.com/max/3750/1*SKkkedxkFkk2qH0u8eSFyA.jpeg"
                      width="120px"
                      height="100px"
                  />
                  </Grid>
                  <Grid item xs>
                      <Typography>
                          7 Reasons Why Smart, Hardworking People Don’t Become Successful
                          <p>I looked at other people and thought,</p>
                      </Typography>
                  </Grid>
              </Grid>
            </div>
            <div>
              <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                      <img 
                          src="https://miro.medium.com/max/450/1*3Y7wyOnJstwrzj2G9Vlq6Q.jpeg"
                          width="120px"
                          height="100px"
                      />
                  </Grid>
                  <Grid item xs>
                      <Typography>
                          How to (Literally) Clean Your Brain
                          <p>What the past decade of glymphatic </p>
                      </Typography>
                  </Grid>
              </Grid>
            </div>
            <div>
              <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                      <img 
                          src="https://miro.medium.com/max/1875/1*R67RwXMxSTucFtYCnNAQwQ.png"
                          width="120px"
                          height="100px"
                      />
                  </Grid>
                  <Grid item xs>
                      <Typography >
                          Travel Is No Cure for the Mind
                          <p>At this very moment, you may be here:</p>
                      </Typography>
                  </Grid>
              </Grid>
            </div>    
          </Grid>
          <Grid item xs>
            <div>
              <div>
                <img 
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFhIVFRUSEBAVFRUVEhAVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0tKystLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADsQAAEDAgQDBgUCBAYDAQAAAAEAAhEDIQQSMUEFUWEGEyJxgfCRobHB0TJCFFLh8SMzYnKSshUWggf/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKBEAAgICAQQBBAIDAAAAAAAAAAECEQMhEgQxQVEiEzJhcbHwBRSB/9oADAMBAAIRAxEAPwDxhpRk7IZRqjBjZZRNpc03ewna4lAnY2YbISicyCjDZHVAWkQgJOckWpiEFhEoJTJwEh0HTfCnbUVYBEEESimWA6U/fxooA6FHKVCUDYwuOcLuK1cLizU0K5qgb30WtTrECWjRcebDFvsWtGphq9VpIuQpeHNFV+UtvueSLB48FkkX58lqcD4hQpglwvzheTmnKKk1Hf4OmEVrZ0nC+BigMwuTqreIxlQNMtt9liYntQxjJa4GNBMkqCj2vD2kOb814/8ArdRkfOUbOz6kI6TLuG4yM2V3OFo1ariJA+c2XHUsfTe489VrYviD+7/wzputs3SOMlSr9kRy8kcvxgO7x2YGToFiYrDPAmLcui9L4Fh2vOesAXLN7Ymjmbl0GoFrL0+n/wAhJZFhUf2cuTplTk2cXhsKXwJgK1iOFBozMcXHcC+iLE1mfsPwQ4TEZZjfUL06ySXK6/BipQjqt+zOrEvIDifXZKvSDRDTKtDK5xJjyUFQiSupa7HJKTf3bIG0J3hM7CWF7qKoSSeWwSfUICsKl7J6WDzkNBAdOp0Q43DOpPhwE7kaFNSrEHNNwgxFcvMuMlRUuXfRtBrjTW/YxAIgIa9JwE6gi/mETJ+KnxFWGtGjgb9VoY206M0FJFUbJJSTN7RCAhKIJwEyxkbXQiMIwwaoIcl5BdUUbXkI6rlEgcUqCc9MSmShA6EknSASGIFX+D1GB8v0i06T1WeVJST7CkrRPxKoxzyWCG9NJ3hVAVNUYoShhGqJGuV7D1zEBZgU1B5GiiUbG0dLgnZW3T5O9kMCxGYxwEc13PZDDjJOQ5jeSvJ6qLwJz8m2GDySowMRwRzGyT6KDDOAWx2vpVGGSbclyQrGV09LyyY+Un3M88eM6qjcDmgyFbHGIbCxWVLKJzpK0lgjL7jKM2ux09PtEWtgLFxuNdUnMoWsBQVXAWSxdNjxu4oqeaU+5We0hE2oU1RhN1G6oQusyqyfPdNUqSZVZwJuhIKKJcF3J3kKWswBgOqLA4DMMztNlJxN+SGQIixSsl+Eu5nVKwBIAsfkmpMLjZRiJUzXZTITNHpaL7ntZAO23NZ2OcM1jbbp0TVq+fVQVGHVOhY8dO33FnToBKZM2pCRgIYRNKBsIBGCmypnNQZ9xigRCmURpILTSIwjCfImDUCux4VjCYUv0UIarWHqECyRMnogq4YgpxTVvCwT4yixFRs+FDEpFQ0yVCaa08PiWixCirubNt1XFVZEZv0ZxYrOAw+d0JU6JJUtCWOlSmr2aubrRpjhmWDyMru+E8bpU6QtcbLgf4pxudFPWqsLJlc/VdJDMt+DbD1U8fY0O0nEP4o2myxMLwt7iABcro+E8GrOAeaZFMiRNiR5LbwtLLGRoE6NI3AG+xRgxxhHiuxWSE5/KRyJ7OvAzFwvo3dU8Xweo24g9Ab9ZXcAMqHxAgAmMsjz+BWXjMOWOaQ+RNrifI26Lo+PozeF1o4x1QttujpmblWuLsvJEEE+u/qNVmVKsqWvRlxZdI5FVnuE3Q4Z5Knp4bMgl67h06IcLKdtGk1w35oqVHK1UO8JcUNWZ7a0XuIPyDwmxuAqE95+r0U7nSIKTGBoTSoqMSqcCdQoXYdy0RVTPqpjuSM1lHcpPbOitveNIQsozJ0QHJ2USCLQkrbhdJBfMohGAmThM0YYciYFGEYcghoKpU2Q99aEwQ1GQiwSXYcOQ5kAckUF8STOrGGrZVTCkphC0KUU0X69QESPgoH1kLwYUKbd9yI40EZKkYDurGApyruKw2USm4/GxOXy4g0aYACmZhgTJVWk++qtPqCFySbuwRZxtEZJal2SwjauIaH/AKWy8jY5SIHxI+CbvB3cI+yWIYzEjMTDgWSOZIP2WuSXKNo16dLkk/Z6liK4DCOnNc+cQAABqTqdr6a8oXRNwzKjImWncGCCuVqUHNLqWXOZIaTeYO/WLrDDKj0s8W3otGMoM2jxXuDJ1ELnOJP8LgCP1Ay09TH1XVYDhgcXMqPA8MMdmd3j3xJAkxabROl1xWP8MtMZpMkCJgkTHnr5rXHlUnowy4ZRVsxsaY8uvIzPvzVNtCb7KbiFafQabIKROUD3e61l2ON2S4d4atGkREhV8Pw8m5VsNDdrLPVnNNor4mpZUAyTZW3uDiqrzlMqxw06Hc/ZKnRJ1KhNeSndWi8pmjvsg6zoQF9tFE6tKd1TZMKCCNVw68I3PsgKdic66Sizpki6IAiQhEmWwgkQnCF6RPkcFOTKiCMBANUOaSEtUzVJlRZPP2VcqNlkZanhBpVkmeRdRPCKU4Mpi40Fh6kFarK+duVZgarNAGQALmwA1JOgAScmo0iXFJ8mRGjG6lBXV0+ydOmwVMdXFFpuKbYNR3QHTN0AK5LFubLiycsnICQXBo0kjUqcceYZOUV8l3JmEG0/haXZPAh+IaHGGgOLjoT4SIHWSPYUnZvs4cQZMhoIBI15mF0PEexBZLqNQ5osHaeRLfwlNwjcbNsOGbqVaOi7PYYsp+Jxc79x0BI5DYLcwpZmmBPO31XMcH4g51ICo3LWpwys3fo4cwdZVynjocLriemz1VtEuLrmgMRUruAY547pmogNaAGg3zlwcbc1wnHOHv7pryPHdzhyzEmPmu0r4VlWo17yXFsua1xlrPJvPZWMRwR+JbAADTq86enP0VY75Ligy8VB8no8TqUiXgHYT5q5w+nLrr0HiX/521rS5tRxqZTEABhPUXMdQVwF2OgiCDBHIixC9CeOSWz56eVOdJmriq4aLLMfi+isVn5gqxYsoqieIn3FgoauHMXVqmYSeyd7KgujMa0gxCE0TPRadVzRZUa1bYIKTbZFVpckTmwLqMgk2RVmkqiyEs3TSd0b3DRQuSLViL0kCZMuhkQQwnagGOSnlPCTWpCsWVG0J2hSBiRDYzSEYKZtEqZtBDJ0Mxkp30lLTpQpciVmv1FRTbRS7hXe4lSMwaLI+qUGNIXZdjsDRpAYrFG1+6aQYEG7z9vj5c//AAS9A4hxjC0Se/pNfAb4cuds8w02jRZZJapHT0vzbcvBm9oe2FJ9GrTp0pzjIKpAEAnUT4iuFwdDO9rebgPKTddB2p7UMxNJtOlR7tofnJhjc0AgWHnKxcC6HMd1B+f91041xx6Ms0ueXbv9Hr/CKFLCUWud5NAElxN7Dcql/wCwValYNGHyMJiXmHuvs3ZXcECWNrBuZzW5abNmzqRO5sJ5DzWbV4TiauIY97mMbTcHAMkucRe5IgeQ+JXFafc9Li12MztLhajMWahq93DIosMZXjUg8xP1VfA48VYdtHi6GbrseOcQoOaBWaHDN3bW5czs8EmBFgACSeixOynCsO6v3lOS0Fx7kDwhwNnRy3jc/Oox56JlL6acv+nUdnuDSA+qDBgtpmZjUF3LnHkunyW92+HvfzhokgX0+fn7+8JPxHS3uNPyu7HiUFUTycueWR3Ip8QpSLNn1AaPX8D42XlPbvs/UY44gMGUx3oaSch0DjO0QJ6L1zE1G5Zn039CPeuqxcaJBES08xz2groUeSpnFkVO0eIUQfRE6oCtTtNwz+HqQ2e7fJYCCMsat6xK55645xalTNIZOSJ6lUJ3VBlsVUqv2VZ9TZSbcWyy+qBqVHUxAOyqlyZM1UESuqnZAah5pkBQXSHLkpQhTOagHohlJKEyZRZFFSNw6vtw6NtJRZyuZQbhlMzCq8KSNjEuRLmU24ZStw4VrKE4CVkPIQCgEYoqxlRtakH1CBuGCk7kKUBJIl5CMsTEwjASyIF9RgMa5xAAkkwBzJXT1+0baNNtKtRFVgaGu0c11oi+oWNw6rTpZ6lQxlYcnVxc1sDzaXD1XM8Qx7qzy425NGgC2jhUops6umzyjbD4jiW1KpcxgYwnw02iA0bWTUXX9dFDRYS75rTw2BJcQBNptq3qtpUolQuUj0/srxEd0xuvhB+S6RlZsWF/dlwnZXCVCGMY0l4OnTWSdgvTuH8PDPE67/k3y/JXnwxSlL8Hq5M8YR339GVwfs62O8rM8bi4lpJNnOm946Lfw+HZTGVjQ0bBoAHv6qQkD3zTF39vfsLujBRWjzMmWU3bYx9+/fVVKovb+inc6ffvy89FXY+Ta4DoJvcxJi3l6ytEYSKjqRde0TFgfiqnFHObTMD9MEjQPZqQevI7WVbEYl1NhI1pmQ0/uH6hNr2PxVqtXa9gg/qaYHQkx9FjlycoP8HVgxcMkfTRzHFMHTxNNzCCf0upOBAdcS11+cO+BXlWIolr3NdILSQRpoYXpz3gHJvTZUbOxIIqU5+i4vtZQy1Q4fpcLRpbX6hKM/qR33X8GfU9OsU7itP+f7/BzdUXUL2K46iTdRuakTGWio6mmyKwKW6RpzolZoV2tlM5isMp3UvcDmiyii1ql7sxOyN1A5raJqoIGUaIIk90VCkjypKizdaCpAE6RKyPNbDaE5CZr0bXJCY9NqIMRB4R5kAPkTNamL0/epFaHTRuhJKbOgKQ6eEAfCOk6SmTqzK4s8lwbsBKqCmBcosdXOc8wflspeE4I1iZJyjYfnZd2ON0kbyahC32IRio0HQc10PY7guJxlU06TixkRVrHSm0/Vx2A/JW3wLsn3rmBlEgHWs5pLWjc5jqvVeG4SjhqYp0xAFzzcT+5xGvL+i1yY1BU3bM8OdzdxVL2ScE4RSwtMU6YMAAOebvqEDUnfyiArjq+zbnny5+9FA3M/8A0t+dvxy+Kssphvu/vksKSOi29jNbudfennr+EDnT5fX38AQneZ8vZ/ry81BVfJgevvrqD0sE0Jsas45LauIAO99/Mj1kbKKkRnLRGWm0CbfqIk/9gfVHiqoY3M7Rsk9TGg8/jKq0HFlFz3frcHPdrcm+x5QNNlS7EN7MfH1QMpInOwWtsByPUrFZinMZlkktJy3mGjQLW44S1tPoCN+nMdFmuoyC6NR8F53UayM9jpPliRznG8eW5mzAc1knmQ6dfIFZvFHCvT7wBouIGYZ8oblu2Z1EqHtG8urBg1MNHzv9Vq4nhg7qN2sysJFxA5z9l0dNjuLf4OLr81NR/JzFNuyF2HG6cmFNhHy4ZtFmYckys/DCJVF1PkuhxJZy8lRxWGECN0kzT6iujMy5WzzUDJWnisEbAGbKuGtGqpBKfojD7X1ULgdVc7gEEyqlQkWTRL27ASUoe1JAWaAqFE1vNALJKTiJWos+yBqaLoFRYYUR6KOUbBCQw3OsgzJFyRagKDzoQUBdCEFFAyUGVYpuhVgOSsZU6J8ETeCvxVZjKLZeT4p/S1oIlz/9In7L1fgnY7D0QMzQ86kQG055imNfUnRVOwlIU8O14b/mOJe/ezi0X5AD6rtSB6e/f/z6Ltg3COvJpGKn926IKlTYabcukdOWwOiahRLjPszz+h3SY3Mfe/5589FcaIHu/v6obo1SsmaR5e7fhC8++Ufj6aqBz/fn+dOaiFfb3bn5aHbzU0W2SVakD3t+NeSr95kE/ucYA6nlv15+SgrYkGb2BueUfcc+RsFSw+LD3uqn/KpDKzkXdNtbb6q1Eyc9lnGf4lRtLZviqWkWuByAm/oo+JvnMNhScRyuY3Eagb7qvjcWMPSdUe6KtUwwamTb4NEXPNBisUMrKlwC0teTY/zAxMgTzVpGbl3IO0tSmKbg/QyBGoMyIhyy6mIAw4ykGdDM+d1h9pONGu636JJbOp5n5LFZi3NBAJg6jbz81PUdE8kE19xp0f8AkliyNNfF/wBsnwTO+xZcBORsSADBJ625rqMVhzkPjcDGktHyEBc12OewVHtqAZnGWONw7QBsQb6rrMaKcEHL5Qfoqw43jgkyOpyrLkckea4hkOI5Ej4FRZlbxtINe4cja8quSFwSVSaFbpBPdZVy47qUsUTrJF8mGzW5UdSjMnZNEoHlxEbIoSk/ZBVadkTKIOuyNrTugqMcBPyTN4zvuVu6KSmGKPJJMu2WsyDMgbKlYCVJzcQ6V1ImDEbWJC4iUgdKEAog1IXEYthJwKMNScUBRF3akFKELytzsjhBWxVJjoyh2d4OhDLxG8kAKopt0S6NDhHYqvUaKtQspUsucucZdkiSco6cyF6JwLCU6VMd1TDZEyR4o6kiSYGvU7QruJJcAOZl3+1on/tlHkgZV5rsjBRRSWy2KYiDvr12uohOUD0+Hufjqna8j7en9fYT0vf5+/rZBqiem0NH4+Jj6/hA+r79/EH4IKtWPfL8H5G6zqmMGaJ87+uvPcH4JJWNyos4nEQDz09Xfn484WVj+JinSc4HxOIYydCTuekTO1t1h8W46AxpkS97iBMDKJueTdD0Kod6axbUfahTHgLzlY8uIzVahMWNobqfVaqJi52a73vqd3QYT4m56rt8pnXeSM0+W6v8Q4hh8HSa6oYY05aNMRnxFQGCRe4BA5C8rjOIdqCwObhRL3n/ABMVUF3H/RTtAAkCdguYcKjqoq1XuqvBEl5zSJ/TewETbS6vhJmfOK7s9LwWAdiKoxGLkFwiky/d0m3AaOttd1kdteJjP3FJ/gY13e5TILiYDZFrBbj+MMbhu8F2lsN0zT4Y218XyXAYl4MwImbf3utcUG3b8GOfIkuK8kVZVKr1PXfb4Kk8FwsYzGB0lbTdGGKJp9mcLnqio4WbOQGIn+a562XZ1yY/v9gqvZ/CsbTEFukmDb+aLCdwp+JV2t1D3Hk1tv8Ak+y5jqZwHFaRFQnZxLh/yIPzBVeyt8VxZfUMtDYsGC+W5Ou5kk+qprzcq+bNsd0C5yjF05F0JKgaBcUwJTyZSdJ2THXkBryJKGm433tdNUBSa6BEIoqvIXfNH7UlEEkDss06Z9E+ZC2udNk7G3CQvJK0kqUOJUbyAkHwkBMLowFDTdeUm1dUhlhxUbkwNtVG5BLE3VbfZzGdxiKb9pyO6B1p9DB9Fz4ddW6L1cXTshxZ7rVcYa4HQkkQ64Oa2nMAqs3FMeJadJlps4dOnvdUuDcVp1GA5mOLmNLhYva4t8QdrF/uqXaXjOGoNzd7TBkuDGkF7jqfC24NwZtvuu9ULZrPxgZq4fiPp9upU+G4uxwNxPv1+9143iO1jqjyTmy/tAECNt1XqcfcZgOAILS4agHlfnCHTKTkvB67xLikaG3Pa2nSRy081xHFe1rafeR+rI5rNbvda3Qarjf/ADGK/ZUcxp5EgHzBsqdZrnnM9xLj+46nyS/RVe2aeFxdQlrjdzQA0u8QaBplabfEFaDqr33e9zjtmJMeQ0HosjBVos7XY81qU3LqxJUcWdyug2tl3kPrc/KETmfcpqe/n9ghrPt529AJP0W/g5ttkwqnI0TLROXoCZH1QVHWUFKodD7kflJ7oReh8XZDiqnh6kgK72bw3e4hv8tPxE2/Vrv0BWPiaunT6rvOwfDclPvDILrzcGLH+YTb/suacrZ1wjSOi/gm5YLZgRpyAbs0bysXieGe3/LJ/wBpuPgZXSVSNHROma0HQczuSsbiNB8S1w3gHn76KEVI864m4OlxYGuzQ4iYd6bG2yoZlq8Uw7/G8jwh1x6xP0+KzC4FcWdVMrG1RIx0IKjAN0GVJzSNdVgaeNCCWa2qaetkIITDYpQvdOiIgRPNCGoLoghMpykgvQVNvNSBySSQn3E9Jkp0khCe4oWuTpJkk1MWTvhJJIV0RNCt0WzdJJBdWWJ5qtiaAfeAmSXV0iuTv0YZ21VETcMAi7gJJLvUUY82JwjS5TNo/Hc/hOkihttAVKYR4bEXynXZJJT2eiquLs0Kbk1c/SP+TgEkl0eDkr5EM2HUD6KKrVskkok9G0VsXCMJ31VrZgSJPqB9wvWeHsyMDHRBEMcwEEQ0ESJsdNEklzm77kpqO8TXXI0N4cASQYza++iweJMLhkmDtBvY7mNPVMkqijOTMOpXJ/wntzF3h2m9vfkuQqAglvIkH0SSXP1XgrCu5GXJ83P1KSS4zehmXTkwLeUpJIDzRG1nVETOySSCrGDCUkklNs2UVR//2Q=="
                  width="100%"
                  height="200px"
                  />
              </div>
              <div style={{marginRight:"50px"}}>
                  <h3>Why I Divorced My Chronically Ill Wife</h3>
                  <p>Ten years later, after thirty years of marriage, I stopped hoping .after thirty years of marriage Why I Divorced My Chronically Ill Wife</p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid xs={12} style={{textAlign:"right",marginRight:"10%"}}>
          <Link color="primary"><strong>SEE ALL FEATURED ></strong></Link>
        </Grid>
      </Paper>
    </div>
  );
}