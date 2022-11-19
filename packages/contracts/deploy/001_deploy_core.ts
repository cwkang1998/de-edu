import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  console.log(`Deploying as ${deployer}…`);

  await deploy('DeEdu', {
    from: deployer,
    args: [],
    log: true,
  });
};
func.tags = ['DeEdu'];
export default func;
