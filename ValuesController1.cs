using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace apidemo
{
    public class ValuesController : ApiController
    {
        public class demo
        {
            public string name { get; set; }
        }

        static List<string> names = new List<string>();

        [HttpGet]
        public List<string> getall()
        {
            return names;
        }

        [HttpPost]
       public void addname(demo d)
        {
            names.Add(d.name);
        }

        [HttpGet]
        public string getbyindex(int id) 
        {
            return names[id];
        }

        [HttpPut]
        public void updatename(int id,demo d)
        {
            names[id] = d.name;
        }

        [HttpDelete]
        public void deletename(int id)
        {
            names.RemoveAt(id);
        }
    }
}