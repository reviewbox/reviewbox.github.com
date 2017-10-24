'use strict';

/**
 * @ngdoc filter
 * @name reviewboxApp.filter:logoSvgUrl
 * @function
 * @description
 * # logoSvgUrl
 * Filter in the reviewboxApp.
 */
angular.module('reviewboxApp').filter('logoSvgUrl', function () {
  return function (input, type) {
    function cpuLogo(manufacture) {
      if (manufacture === 'Intel') {
        return 'dImages/prdLogo/intel.svg';
      } else {
        return 'dImages/prdLogo/intel.svg';
      }
    }
    function graphicLogo(chipsetManufacture) {
      if (chipsetManufacture === 'NVIDIA') {
        return 'dImages/prdLogo/nvidia.svg';
      } else {
        return 'dImages/prdLogo/nvidia.svg';
      }
    }
    function memLogo(manufacture) {
      if (manufacture === 'Samsung') {
        return 'dImages/prdLogo/samsung.svg';
      } else {
        return 'dImages/prdLogo/samsung.svg';
      }
    }
    function hddLogo(manufacture) {
      if (manufacture === 'Western Digital') {
        return 'dImages/prdLogo/wd.svg';
      } else if (manufacture === 'Seagate') {
        return 'dImages/prdLogo/seagate.svg';
      }
    }
    function ssdLogo(manufacture) {
      if (manufacture === 'PHINOCOM') {
        return 'dImages/prdLogo/phinocom.svg';
      } else if (manufacture === 'SanDisk') {
        return 'dImages/prdLogo/sandisk.svg';
      } else if (manufacture === 'Samsung') {
        return 'dImages/prdLogo/samsung.svg';
      }
    }
    function mainboardLogo(manufacture) {
      if (manufacture === 'Asrock') {
        return 'dImages/prdLogo/asrock.svg';
      } else if (manufacture === 'MSI') {
        return 'dImages/prdLogo/msi.svg';
      } else if (manufacture === 'Gigabyte') {
        return 'dImages/prdLogo/gigabyte.svg';
      }
    }

    if (type === 'cpu') {
      return cpuLogo(input.manufacture);
    } else if (type === 'graphics') {
      return graphicLogo(input.chipsetManufacture);
    } else if (type === 'memory') {
      return memLogo(input.manufacture);
    } else if (type === 'hdd') {
      return hddLogo(input.manufacture);
    } else if (type === 'ssd') return ssdLogo(input.manufacture);else if (type === 'mainboard') return mainboardLogo(input.manufacture);else if (type === 'case') return 'dImages/prdLogo/msi.svg';else if (type === 'sw') return 'dImages/prdLogo/msi.svg';
  };
});

//# sourceMappingURL=logosvgurl-compiled.js.map