using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace Xrm.Tools.DiscoAPITest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void  TestMethod1()
        {
            Task.Run(async () =>
            {
                string token = "";

                Xrm.Tools.DiscoAPI.CRMDiscoAPI api = new DiscoAPI.CRMDiscoAPI("https://globaldisco.crm.dynamics.com/api/discovery/v1.0/", token);
                var results = await api.GetInstances();
                foreach(var org in results.List)
                {
                   
                    var getByID = await api.Get( org.Id);
                    var getByName = await api.Get(org.UniqueName);
   
                }

            }).Wait();

        }
    }
}
