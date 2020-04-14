# Ngx Loader

**Ngx loader** is an angular library for preloader. It is very easy to integrate to component and can be customize with custom template.


## Demo
![](https://media.giphy.com/media/LPSuxSHJD5Efe1Y3S9/giphy.gif)

[Demo in example](https://tusharghoshbd.github.io/ngx-loader/#)

[Demo in stackblitz](https://stackblitz.com/edit/ngx-loader?file=src/app/app.component.ts)

## Installation

```ts
npm i @tusharghoshbd/ngx-loader
```

## Usage
#### app module
```ts
import { NgxLoaderModule } from '@tusharghoshbd/ngx-loader';

@NgModule({
  imports:      [ ...,  NgxLoaderModule ]
})
```
#### Html file
```html
 <ngx-loader [show]="true" > Loading... </ngx-loader>
```

## Features:
* Fullscreen mode 
* Insider container mode (Parent container must be style position: relative)
* Customize the template
* Easy to integrate in component

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/)