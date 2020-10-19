import * as vscode from 'vscode';
import { WebPanel } from './WebPanel';


/**
 * Activates extension
 * @param context vscode extension context
 */
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('angular-webview.start', () => {
      WebPanel.createOrShow(context.extensionPath);
    })
  );
}
