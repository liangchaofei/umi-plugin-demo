// src/plugins/CustomJsonPlugin.js
import { IApi } from 'umi';

export default function(api: IApi, options: any) {
    api.onStart(() => {
      console.log('--------custom--------------------');
      console.log(options);
      console.log(api.config.custom.callback())
    });
    api.describe(({
      key: 'custom',
      config: {
        schema(joi) {
          return joi.object();
        },
      }
    }))
}
