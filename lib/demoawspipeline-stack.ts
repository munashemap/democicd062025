import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import * as pipelines from 'aws-cdk-lib/aws-pipelines';

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

  //CI-CD Pipeline
    const demopipeline = new CodePipeline(this,'codepipelinelogicalid',{
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.connection('Rahul1981/democicd021223', 'main', {
        }),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });



    })



  }
}
