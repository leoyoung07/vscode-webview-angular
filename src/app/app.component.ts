import { Component } from '@angular/core';

declare const acquireVsCodeApi: () => {
  getState: () => any;
  setState: (any) => void;
  postMessage: (any) => void;
};

const vscode = acquireVsCodeApi();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'VSCode Webview Angular';

  /**
   * onTitleClick
   */
  public onTitleClick() {
    vscode.postMessage({
      command: 'alert',
      text: this.title,
    });
  }
}
