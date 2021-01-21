# Code Examples that shows how to use ESXX features in LWC

1. Clone the repo:

   ```
   git clone git@github.com:albarivas/esxx-features.git
   ```

1. If you haven't already done so, authorize with your hub org and provide it with an alias (**myhuborg** in the command below):

   ```
   sfdx force:auth:web:login -d -a myhuborg
   ```

1. Create a scratch org and provide it with an alias (**esxx-features** in the command below):

   ```
   sfdx force:org:create -s -f config/project-scratch-def.json -a esxx-features
   ```

1. Push the app to your scratch org:

   ```
   sfdx force:source:push
   ```

1. Assign the **esxx-features** permission set to the default user:

   ```
   sfdx force:user:permset:assign -n esxx_features
   ```

1. Open the scratch org:

   ```
   sfdx force:org:open
   ```
