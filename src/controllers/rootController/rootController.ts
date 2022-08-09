// Typical controller, I assume we'll have a couple of these one probably will handle just
// api/jobs which returns the status of jobs and allows new jobs to be submitted for example called JobController
// and another maybe for api/download which maybe is called DownloadController and allows the user to download the processed video

import express from 'express';
import { DownloadMessageRequest } from '../../models/downloadMessageRequest';
import { DownloadMessageResponse } from '../../models/downloadMessageResponse';
import { HelloMessageResponse } from '../../models/helloMessageResponse';

const YoutubeURLRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/;

export const init = (app: express.Application): void => {
  app.get('/api', async (req, res: express.Response<HelloMessageResponse>) => {
    res.status(200).json({message: `Hello: ${req.headers['user-agent']}`});
  });
  app.get('/api/submit', async (req: express.Request<DownloadMessageRequest>, res: express.Response<DownloadMessageResponse>) => {
    if (!req.params['url']) return res.status(400); // Bad input
  
    const videoID = req.params.url.match(YoutubeURLRegex);
    if (videoID && videoID?.length >= 6) {
      // return video id here
      const newVideoID = 'placeholder';
      res.status(200).json({id: `${newVideoID}`});
    }

    return res.status(400);
  }); 
  
};
