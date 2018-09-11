import webpack from 'webpack';
import fs from 'fs';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import KateServer from './KateServer';

import Fields from './fields';
import { makeEntitiesFromStructures } from './server';
import { Entity } from './Entity';


const trivialLogger = {
  info: (...args) => console.log(...args),
  debug: (...args) => console.log(...args),
  error: (...args) => console.error(...args),
};

export default class KatePlatform {
  constructor({ AppServer, logger }) {
    this.logger = logger || trivialLogger;
    this.server = new KateServer({ App: AppServer, logger: this.logger });
  }
  syncDatabase() {
    this.server.syncDatabase();
  }
  startServer() {
    this.server.run();
  }
  compileClient() {
    this.logger.info('Compiling client...');
    webpack({
      entry: './src/client.js',
      output: {
        path: `${process.cwd()}/build`,
        filename: './bundle/bundle.js',
      },
      plugins: [
        new ExtractTextPlugin('./bundle/bundle.css'),
      ],
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        }],
      },
      mode: 'development',
    }, (err, stats) => {
      if (err || stats.hasErrors()) {
        const info = stats.toJson();
        this.logger.info('Client compiling error!', info.errors);
      } else {
        this.logger.info('...client compiling done!');
        this.makeIndex();
      }
    });
  }
  makeIndex() {
    const index = fs.readFileSync(`${__dirname}/index.html`, { encoding: 'utf8' });
    fs.writeFileSync(`${process.cwd()}/build/index.html`, index.replace('%app_title%', this.server.app.title), { encoding: 'utf8' });
  }
}

export {
  Fields,
  Entity,
  makeEntitiesFromStructures,
};
