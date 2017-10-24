'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:GskbCtrl
 * @description
 * # GskbCtrl
 * Controller of the reviewboxApp
 */

angular.module('reviewboxApp')
  .controller('GskbCtrl', function ($scope, $http, GskbProvider, GskbFactory) {
    $scope.gridReady = false;
    $scope.gridOptions = GskbFactory.getGridOptions();

    $scope.userSource = '';
    $scope.sources = ('All, Literature, GO_BP, REACTOME, GO_MF, STITCH, MPO, HPO, GO_CC, ' +
    'miRDB, T3DB, SIDER, LOC, miRNA, MouseCyc, KEGG, microRNA.org, GeneSigDB, L2L, MATADOR, ' +
    'PID, AraCyc, Grimson et sl., Biocarta, PANTHER, WikiPathways, DrugBank, PO, TFactS, TRED, ' +
    'CircruitsDB, TarBase, TANSFAC, SMPDB, INOH, TF, miRTarBase, EHMN, MethyCancer, HumanCyc, ' +
    'MicroCosm, PicTar, Computational, NetPath, CancerGenes, MethCancerDB')
      .split(',').map(function (source) { return { sourceOrigin: source }; });

    $scope.userSpecies = '';
    $scope.species = ('mouse, Arabidopsis thaliana, zea_mays')
      .split(',').map(function (source) { return { sourceOrigin: source }; });

    $scope.userFormats = '';
    $scope.formats = ('Web Page, CSV, JSON')
      .split(',').map(function (source) { return { sourceOrigin: source }; });

    $scope.save = function(){
      $scope.GSKB.$save();
      $scope.GSKBs.push($scope.GSKB);
      $scope.GSKB = new GskbProvider();
    }

    $scope.delete = function(post){
      GskbProvider.delete(post);
      _.remove($scope.posts, post);
    }

    $scope.getQuery = function(){
      $scope.query = $scope.query.replace(/\s/g, '');
      $scope.GSKBs = GskbProvider.query({'query':$scope.query});
      $scope.GSKBs.$promise.then(function(data){
        $scope.gridReady = true;
        $scope.gridOptions.data = data;
      })

    }

    $scope.getGSKB = function(id){
      $http.get('https://pbshop.herokuapp.com/gskbs/queryOne/'+id).success(function(data){
        $scope.record = data;
      })
    };

  });

