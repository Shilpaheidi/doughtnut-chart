import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  text1 = '$1200';

  subtitles = { text: 'total' };
  chartOptions = {
    animationEnabled: true,
    theme: 'dark1',
    title: {
      text: `${this.text1}   ${this.subtitles.text} `, // Use spaces here instead of line breaks
      verticalAlign: 'center',
      horizontalAlign: 'center',
      maxWidth: 70,
      fontWeight:'normal',
      padding:8
   
    },



    // subtitles: [
    //   {
    //     text: `  ${this.subtitles.text}`, // Use spaces here instead of line breaks
    //     verticalAlign: 'center',
    //     horizontalAlign: 'center',
    //     maxWidth: 50,
    //     padding:12,
    //     className: 'subtitles-text', // Apply the subtitle class
    //     marging:4,
    //   },
    // ],
    backgroundColor: '#0f172a',
    data: [
      {
        type: 'doughnut',
        ValueFormatString: "#,###.##'%'",
        dataPoints: [
          { y: 90, color: 'black' }, // Black color for the third data point
          { y: 39, color: '#008000' }, // Green color for the first data point
          { y: 33, color: 'orange' }, // Yellow color for the second data point
        ],
      },
    ],
  };
}
