![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Lab-Hook-TrafficLight

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission

Upon completion, run the following commands

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-".

Include a link to your deployed heroku app in the pull request.

## Instructions

Well now we will create our first traffic light using react and hooks

### Iteration 1 | Create react app

Initialize a react project so we can start working

### Iteration 2 | Components 

we need to create two components:

- `TrafficLight` - this component will be a function to use hooks and useEffect
- `Light` - const only to recive params ({ color, active })

add this styles for the components

    .light {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 10px;
    }

    .traffic-light {
      width: 120px;
      padding: 5px;
      margin: 5px;
      background-color: #888;
      border: dashed 1px #666;
      display: inline-block;
    }

colors:

- `red` - "#f00"
- `yellow` - "#ff0"
- `green` - "#0c0"

we must have something like that

![TrafficLigth](https://res.cloudinary.com/dhgfid3ej/image/upload/v1591432790/Screen_Shot_2020-06-06_at_3.39.35_rvuzkl.png)

### Iteration 3 | active useEffect 

It's time to start with our logic, using useEffect we have to make our traffic light start working and you can see transitions of the color change, remember the parameter `active` will serve to give the opacity effect or turn off the other lights.

`advice use %`

and that's it

Happy Coding! :heart:
 
