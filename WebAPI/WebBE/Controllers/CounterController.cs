using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using StackExchange.Redis;
using System.Net;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CounterController : ControllerBase
    {
        private readonly ILogger<CounterController> _logger;
        private readonly IDistributedCache _cache;
        string ciao = "";
        public CounterController(ILogger<CounterController> logger, IDistributedCache cache)
        {
            _logger = logger;
            _cache = cache;
            ServicePointManager.ServerCertificateValidationCallback += (sender, cert, chain, sslError) => true;
        } 
         
        public string Get()
        {
            string key = "Counter";
            string? result = null;
            try
            {
                var counterStr = _cache.GetString(key);
                if (int.TryParse(counterStr, out int counter))
                {
                    counter++;
                }
                else
                {
                    counter = 0;
                }
                result = counter.ToString();
                _cache.SetString(key, result);
            }
            catch (RedisConnectionException)
            {
                result = $"Redis cache is not found.";
            }
            return result;
        }
         
    }
}