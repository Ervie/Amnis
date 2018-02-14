using API.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class MetadataController : Controller
    {
        // GET api/metadata
        [HttpGet]
        public string Get()
        {
            return MetadataWorker.SendRequest("http://radio.vgmradio.com:8040/stream");
        }

        // GET api/metadata/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/metadata
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/metadata/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/metadata/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
