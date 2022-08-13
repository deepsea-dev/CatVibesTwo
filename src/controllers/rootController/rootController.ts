// Typical controller, I assume we'll have a couple of these one probably will handle just
// api/jobs which returns the status of jobs and allows new jobs to be submitted for example called JobController
// and another maybe for api/download which maybe is called DownloadController and allows the user to download the processed video

import { Application, Request, Response } from 'express';
import { DownloadMessageRequest } from '../../models/downloadMessageRequest';
import { DownloadMessageResponse } from '../../models/downloadMessageResponse';
import { HelloMessageResponse } from '../../models/helloMessageResponse';

const YoutubeURLRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/;

export const init = (app: Application): void => {
  app.get('/api', async (req, res: Response<HelloMessageResponse>) => {
    res.status(200).json({message: `Hello: ${req.headers['user-agent']}`});
  });
  app.post('/api/submit', async (req: Request<DownloadMessageRequest>, res: Response<DownloadMessageResponse>) => {
    if (req.body.url === undefined) return res.sendStatus(400); // Bad input
  
    const videoID = req.body.url.match(YoutubeURLRegex);
    if (videoID && videoID?.length >= 6) {
      // return video id here
      const newVideoID = 'placeholder';
      return res.status(200).json({id: `${newVideoID}`});
    }

    return res.sendStatus(400);
  }); 
  
};
