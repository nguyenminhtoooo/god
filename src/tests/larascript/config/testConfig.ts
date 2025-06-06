import { IAppConfig } from '@src/config/app.config';
import { EnvironmentTesting } from '@src/core/consts/Environment';

require('dotenv').config();

const testAppConfig: IAppConfig = {
    appKey: 'test',
    env: EnvironmentTesting
};

export default testAppConfig;
