import {serviceAdd} from "@/models/serviceAdd";
import {mongooseConnect} from "@/lib/mongoose";
import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
  await isAdminRequest(req,res);

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await serviceAdd.findOne({_id:req.query.id}));
    } else {
      res.json(await serviceAdd.find());
    }
  }

  if (method === 'POST') {
    const {stype,description,rental} = req.body;
    const serviceDoc = await Product.create({
      stype,description,rental,
    })
    res.json(serviceDoc);
  }

  if (method === 'PUT') {
    const {stype,description,rental,_id} = req.body;
    await Service.updateOne({_id}, {stype,description,rental});
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Service.deleteOne({_id:req.query?.id});
      res.json(true);
    }
  }
}