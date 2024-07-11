using InventoryAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace InventoryAPI.InventoryDBContext
{
    public class InventoryDBContextClass : DbContext
    {
        public DbSet<InventoryItem> InventoryItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options) 
        {
            options.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=InventoryDB;Trusted_Connection=True;MultipleActiveResultSets=true");
        }

    }

}

